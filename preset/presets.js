// 프리셋(기본 제공 운동 루틴)을 따로 관리하는 파일입니다.
// 이 배열 안에 새로운 객체를 추가하면 메인 화면의 TRACK LIST에 자동으로 나타납니다.

window.VCR_PRESETS = [
    {
        id: "CH01",
        type: "preset",
        name: "TABATA BASIC",
        work: 20,
        rest: 10,
        sets: 8,
        gif: "./gif/ch01.gif",
        playlist: [
            { name: "FULL BODY BURST", gif: "./gif/tabata_burst.gif" }
        ]
    },
    {
        id: "CH02",
        type: "preset",
        name: "HEAVY JUMP ROPE",
        work: 60,
        rest: 30,
        sets: 10,
        gif: "./gif/ch02.gif",
        playlist: [
            { name: "JUMP ROPE", gif: "./gif/jumprope.gif" }
        ]
    },
    {
        id: "CH03",
        type: "preset",
        name: "BOXING ROUND",
        work: 180,
        rest: 60,
        sets: 12,
        gif: "./gif/ch03.gif",
        playlist: [
            { name: "SHADOW BOXING", gif: "./gif/boxing.gif" }
        ]
    }
    
    /* 새로운 프리셋을 추가하려면 아래 형식을 복사해서 붙여넣으세요!
    , {
        id: "CH04",
        type: "preset",
        name: "CORE CRUNCH",
        work: 45,
        rest: 15,
        sets: 5,
        gif: "./gif/ch04.gif",
        playlist: [
            { name: "CRUNCH", gif: "./gif/crunch.gif" },
            { name: "PLANK", gif: "./gif/plank.gif" }
        ]
    }
    */
];
