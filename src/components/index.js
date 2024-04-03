
export default function filterJobs(data, filterList){
    return data.filter(elem => filterList.every(value => [elem.role, elem.level, ...elem.languages, ...elem.tools].includes(value)))
}
