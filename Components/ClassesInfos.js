import ClassesInfosList from './ClassesInfosList.js';

class ClassesInfos {

    get(characterClass = "") {
        return ClassesInfosList[characterClass] || [];
    }

    getAll() {
        const allClassesInfos = []
        for (const [name, infos] of Object.entries(ClassesInfosList)) {
            allClassesInfos.push(...infos)
        }
        return allClassesInfos;
    }
}

export default new ClassesInfos;