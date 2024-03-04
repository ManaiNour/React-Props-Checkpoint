import PlayerList from "./player";

function Pl() {
    let players = [
        {
            name: "Erling Haaland",
            team: "Manchester City F.C. (#9 / Forward), Norway national football team (Forward)",
            nationality: "Norwegian",
            jerseyNumber:9,
            age:"23 years (July 21, 2000)",
            image: "https://www.mancity.com/meta/media/jybffupz/erling-haaland.png"
        },

        {
            name: "Cristiano Ronaldo",
            team: "Al-Nassr Football Club (#7 / Attaquant), Équipe du Portugal de football (#7 / Attaquant)",
            nationality: "Portuguese",
            jerseyNumber:7,
            age:" 39 ans (5 février 1985)",
            image: "https://s.france24.com/media/display/2e9ae70c-131a-11ec-93a3-005056a97e36/w:980/p:16x9/efc6391b39735bf0ec3857860183c094381d25ea.jpg"
        },

        {
            name: "Kylian Mbappé",
            team: "France national football team (#10 / Forward)",
            nationality: "French",
            jerseyNumber:10,
            age:"25 years (December 20, 1998)",
            image: "https://s.hs-data.com/bilder/spieler/gross/284095.jpg"
        },

        {
            name: "Neymar",
            team: "Al-Hilal Football Club (#10 / Attaquant), Équipe du Brésil de football (#10 / Attaquant)",
            nationality: "Brazilian",
            jerseyNumber:10,
            age:" 32 ans (5 février 1992)",
            image: "https://s.hs-data.com/bilder/spieler/gross/142105.jpg"
        },

        {
            name: "Olivier Jonathan Giroud",
            team: "AC Milan (#9 / Forward), France national football team (#9 / Forward)",
            nationality: "French",
            jerseyNumber:9,
            age:" 37 years (September 30, 1986)",
            image: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt1a1102ed94d0fb04/60e76f1b523e6f6685260243/b93168aba05f6fc9d09ee06119933458ad6a81ac.jpg?auto=webp&format=pjpg&width=3840&quality=60"
        },

        {
            name: "Harry Edward Kane",
            team: "FC Bayern Munich (#9 / Forward), England national football team (#9 / Forward)",
            nationality: "English",
            jerseyNumber:9,
            age:" 30 years (July 28, 1993)",
            image: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQajw8_IMGNaAtlv3Lntzn0Diiky6OH3T4MMUnDdZBGGF2jpxD5BRPG3tYMueQna8qKjKLIDwKxBTCtpkE"
        }
    ];
    return (
        <div className="cards" /*style={{display:"flex"/*"block"*, /*justifyContent:"spacebetween" , flexWrap:"wrap" , */ /*,height:"500px" , width:"650px", gap:"20px" */ >
            {players.map((player) => {
                return <PlayerList props={player} />
            })}

        </div>
    )
}


export default Pl