export type Instruction = {
    title: string,
    description: string,
    resources: {
        title: string,
        link: string,
    }[]
}

export type Assignment = {
    canSkipAnyQuestion: boolean,
    gatesProvidedInEveryQuestion: string[],
    questions: {
        instructions: Instruction[]
    },
    gatesProvided: string[],
    canSkip?: boolean,
    answer: {
        inputs: {
            defaultXY: number[],
        }[],
        outputs: {
            defaultXY: number[]
        }[],
        truthTable: number[][][] | string[][][]
    }
}[]

