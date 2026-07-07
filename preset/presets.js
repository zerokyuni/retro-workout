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
        gif: "./gif/jump.jacks.gif",
        playlist: [
            { name: "JUMPING JACKS", gif: "./gif/jump.jacks.gif" },
            { name: "JUMPING BURPEE", gif: "./gif/jump.burp.gif"},
            { name: "MT.CLIMBER", gif: "./gif/mt.climb.gif" },
            { name: "SQUAT&JUMP", gif: "./gif/sqrt.jump.gif" }
        ]
    },
    {
        id: "CH02",
        type: "preset",
        name: "INTERVAL JUMP ROPE",
        work: 90,
        rest: 30,
        sets: 10,
        gif: "./gif/jump.rope.gif",
        playlist: [
            { name: "WARMING UP", work: 180, rest: 5}
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" }
            { name: "COOL DOWN", work: 300, rest: 5}
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
    
    , {
        id: "CH04",
        type: "preset",
        name: "LEG CORE",
        work: 45,
        rest: 3,
        sets: 9,
        gif: "./gif/glu.bridge.hip.abd.gif",
        playlist: [
            { name: "BUTTERFLY.FLAPS", gif: "./gif/buttfly.flap.gif", work: 3, rest: 3 },
            { name: "GLUTE BRIDGE", gif: "./gif/glute.bridge.gif", work: 5, rest: 10 },
            { name: "CAT STRETCH", gif: "./gif/cat.stretch.gif" },
            { name: "PELVIC TILT", gif: "./gif/pelvic.tilt.gif" },
            { name: "CHILD POSE", gif: "./gif/childpose.kneelpu.gif" },
            { name: "FROG CRUNCH", gif: "./gif/frog.crunch.gif" },
            { name: "BRIDGE HIP.ABD", gif: "./gif/glu.bridge.hip.abd.gif" },
            { name: "BENT LEG SIDE.K L", gif: "./gif/bent.leg.sideK.gif" },
            { name: "BENT LEG SIDE.K R", gif: "./gif/bent.leg.sideK.gif" }
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
            { name: "CRUNCH", gif: "./gif/crunch.gif", work: 45, rest: 3  },
            { name: "PLANK", gif: "./gif/plank.gif", work: 45, rest: 3 }
        ]
    }
    */
];
