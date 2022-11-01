let gameData = []
let Gamebarrier;
for (let i = 100; i >= 1; i -= 10) {
    if (i % 20 === 0) {
        for (let j = i; j > (i - 10); j--) {
            gameData.push({
                id: j,
                icons: '',
                Torule:'',
                fromrule:'',
                players: {}
            })
        }
    }
    else {
        for (let j = (i - 9); j <= i; j++) {
            gameData.push({
                id: j,
                icons: '',
                Torule:'',
                fromrule:'',
                players: {}
            })
        }
    }
}
let Gamestages = [{ Fromrule: 15, Torule: 4, icon: '🐍' },
{
    Fromrule: 33,
    Torule: 12,
    icon: '🐍'
},
{
    Fromrule: 44,
    Torule: 26,
    icon: '🐍'
},
{
    Fromrule: 80,
    Torule: 59,
    icon: '🐍'
},
{
    Fromrule: 97,
    Torule: 23,
    icon: '🐍'
},
{
    Fromrule: 20,
    Torule: 24,
    icon: '⬆️'
},
{
    Fromrule: 31,
    Torule: 39,
    icon: '⬆️'
}]
Gamebarrier=Gamestages

gameData.forEach(element1 => {
    Gamebarrier.forEach(element2 => {
        if (element1.id === element2.Fromrule) {
            element1.icons = element2.icon
            element1.fromrule=element2.Fromrule
            element1.Torule = element2.Torule
            
        }
// gameData.forEach(element1=>{
//     Gamebarrier.forEach(element2=>{
//         if(element1.id===element2.Fromrule){
//             element1.players=element2.Torule
//         }
//     })
    
// })
        
    })
});


export  {gameData ,Gamebarrier}