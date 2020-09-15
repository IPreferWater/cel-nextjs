import matter from 'gray-matter'
import marked from 'marked'
import yaml from 'js-yaml'
import { getMonthLabelFromInt } from '@util'

export async function getAllPosts(){
    const context = require.context('../_posts', false, /\.md$/)
    const posts = []
    for(const key of context.keys()){
        const post = key.slice(2);
        const content = await import(`../_posts/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            image: `blog/${meta.data.image}.jpg`
        })
    }
    return posts
}

export async function  getLatestsPostsByNumber(){
    const context = require.context('../_posts', false, /\.md$/)
    const posts = []
    var len = context.keys().length
    for (let i = 1; i <= 4; i++) {
        len = len-1
        const key = context.keys()[len]
        const post = key.slice(2);
        const content = await import(`../_posts/${post}`);
        const meta = matter(content.default)
        posts.push({
            slug: post.replace('.md',''),
            title: meta.data.title,
            image: `blog/${meta.data.image}_s.jpg`
        })

      }
      return posts;
}

export async function getPostBySlug(slug){
    const fileContent = await import(`../_posts/${slug}.md`)
    const meta = matter(fileContent.default)
    const content = marked(meta.content)    
    return {
        title: meta.data.title, 
        content: content,
        image: `blog/${meta.data.image}.jpg`
    }
}

export async function getConfig(){
    const config = await import(`../config.yml`)
    return yaml.safeLoad( config.default )
}

export async function getAllPlannings(){
    const context = require.context('../_plannings', false, /\.json$/)
    const jsons = []
    for(const key of context.keys()){
        const json = key.slice(2);
        const slug = json.replace('.json','')
        jsons.push({
            slug: slug,
            title: getPlanningNameBySlug(slug)
        })
    }
    return jsons;
}

export async function getPlanningBySlug(slug){
    const fileContent = await import(`../_plannings/${slug}.json`)

    return {
        content: fileContent.default
    }
}

function getPlanningNameBySlug(slug){

    const arr = slug.split("_", 2)
    const monthLabel = getMonthLabelFromInt(arr[1])

    return `${monthLabel} - ${arr[0]}`
}