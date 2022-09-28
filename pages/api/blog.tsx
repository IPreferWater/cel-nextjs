import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {Creation} from '../../interfaces/index'

const postsDirectory = path.join(process.cwd(), 'data/blog')
const creationsDirectory = path.join(process.cwd(), 'data/_creations')

export function getSortedPostsData() {
  // Get files
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)
    const date = matterResult.data.date
    return {
      id,
      date,
      ...matterResult.data
    }
  })

  // Sort posts by date
  return allPostsData.sort(({ date: a }, { date: b }) => {
    if (a < b) {
      return 1
    } else if (a > b) {
      return -1
    } else {
      return 0
    }
  })
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export function getPostData(id:number) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents)
  const content = matterResult.content

  return {
    id,
    content,
    ...matterResult.data
  }
}

//TODO: make another file in API "creations" instead of puting the code in "blog"
export function getAllCreationIds() {
  const fileNames = fs.readdirSync(creationsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.json$/, '')
      }
    }
  })
}

export function getCreationDataByID(id:number) :Creation {
  const fullPath = path.join(creationsDirectory, `${id}.json`)
  const creationString = fs.readFileSync(fullPath, 'utf8')
  const creation: Creation = JSON.parse(creationString);
  return creation


}