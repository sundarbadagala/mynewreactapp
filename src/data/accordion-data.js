import Content from "../components/accordion/content"

export const data = [
    {
        id: '1',
        title: 'first',
        content: 'first content'
    },
    {
        id: '2',
        title: 'first',
        content: [
            {
                id:'2.1',
                title: 'no',
                content: 'hellooo'
            },
            {
                id:'2.2',
                title: 'no',
                content: 'hellooo'
            }
        ]
    },
    {
        id: '3',
        title: 'first',
        content: [
            {
                id:'3.1',
                title: 'no',
                content: 'hellooo'
            },
            {
                id:'3.2',
                title: 'no',
                content: [
                    {
                        id:'3.2.1',
                        title: 'no',
                        content: 'hellooo'
                    },
                    {
                        id:'3.2.2',
                        title: 'no',
                        content: 'hellooo'
                    }
                ]
            }
        ]
    },
    {
        id: '4',
        title: 'first',
        content: <Content/>
    },

]