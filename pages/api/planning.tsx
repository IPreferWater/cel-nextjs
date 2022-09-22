import fs from 'fs'
import path from 'path'
import {IPlanning, IPlanningTitle} from '../../interfaces/index'

const planningsDirectory = path.join(process.cwd(), 'data/_plannings')

export function getAllPlannings(): IPlanningTitle[]{
    const jsons = []

    var files = fs.readdirSync('data/_plannings');

    for (const file of files){
        const id = file.replace('.json','')
        jsons.push({
            id: id,
            title: getPlanningNameByID(id)
        })
    }

    return jsons;
}

export function getPlanningByID(id:String): IPlanning{
    const fullPath = path.join(planningsDirectory, `${id}.json`)
    const planningString = fs.readFileSync(fullPath, 'utf8')
    const planing: IPlanning = JSON.parse(planningString);
    return planing
}

function getPlanningNameByID(id:String){

    const arr = id.split("_", 2)
    const monthLabel = getMonthLabelFromInt(arr[1])

    return `${monthLabel} - ${arr[0]}`
}

const arrMonthsString = ["","janvier","février","mars","avril","mai","juin","juillet","aout","septembre","octobre","novembre","décembre"]

export function getMonthLabelFromInt(month:String){
    return arrMonthsString[month]
}

export function getLabelDay(year, month, day) {
    var date = new Date(`${year}/${month}/${day}`);
    return date.toLocaleDateString("fr-FR", { weekday: 'long' });
  }