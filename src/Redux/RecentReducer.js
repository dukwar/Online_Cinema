import {ADDFILMS, ISFETCHING, SETFILTER} from "./constants";

const initialState = {
    films: [
        {id: 1, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5510/560x302/p_b7abe8e.jpg' ,
            description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},
        { id: 2, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5506/560x302/p_6284fb7.jpg', description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},
        {id: 3, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5441/560x302/p_e85944a.jpg', description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},
        {id: 3, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5438/560x302/p_7f1c768.jpg', description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},
        {id: 4, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5502/560x302/p_5bbeaac.jpg', description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},
        {id: 5, title: 'switch our mothers', date:  Date.now(), poster: 'https://images.kinomax.ru/films/5/5490/560x302/p_ee13835.jpg', description:'Алексей Карпушин — обычный молодой советский парень, пожарный в Припяти, который впервые начинает строить планы длиннее, чем на выходные или ' +
                'отпуск — он влюбляется в парикмахера Олю. В прошлом у них уже были отношения, но тогда Алексей упустил свой шанс. Теперь у Оли есть маленький сын Леша, н' +
                'о Алексей намерен никогда больше не повторять прежних ошибок: он признается Оле в своих чувствах, и все вместе они планируют переехать к морю.\n' +
                '\n' +
                'Авария на Чернобыльской АЭС ставит под угрозу мечту Алексея и жизни всех тех, кто ему дорог. Взрыв реактора гр' +
                'озит смертью не только тысячам людей, оказавшихся в зоне радиационного поражения: возможен второй взрыв, катастрофические последствия ко' +
                'торого могут быть несоизмеримо больше. Алексей отправляется тушить пожар, а затем погружается под ядерный реактор, чтобы выпустить воду из ' +
                'резервуара и тем самым предотвратить еще один мощный взрыв.'},

    ],

    isFetching: false,
    filter: 'movies'


}



const RecentReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADDFILMS:
            debugger
            return {
                ...state,
                films: [...action.data]

            }

        case ISFETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }

        case SETFILTER:
            return {
                ...state,
                filter: action.filter
            }





        default:
            return state

    }
}

export default RecentReducer