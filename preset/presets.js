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
        sets: 9,
        gif: "./gif/jump.rope.gif",
        playlist: [
            { name: "WARMING UP", gif: "./gif/default_fallback.gif", work: 180, rest: 5},
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "JUMP ROPE", gif: "./gif/jump.rope.gif" },
            { name: "COOL DOWN", gif: "./gif/default_fallback.gif", work: 300, rest: 5}
        ]
    },
    {
        id: "CH03",
        type: "preset",
        name: "ABS CRUNCH",
        work: 30,
        rest: 1,
        sets: 13,
        gif: "./gif/crunch.gif",
        playlist: [
            { name: "LEG RAISE", gif: "./gif/lying.leg.raise.gif" },
            { name: "LEG.HIP RAISE", gif: "./gif/leg.raise.hip.lift.gif" },
            { name: "REV.CRUNCH", gif: "./gif/reverse.crunch.gif" , rest: 30},
            { name: "RUSSIAN TWIST", gif: "./gif/russian.twist.gif" },
            { name: "SIDE CRUNCH L", gif: "./gif/side.crunch.gif" },
            { name: "SIDE CRUNCH R", gif: "./gif/side.crunch.gif" },
            { name: "HEEL TOUCH", gif: "./gif/heel.touch.crunch.gif" , rest: 30},
            { name: "CRUNCH", gif: "./gif/crunch.gif" },
            { name: "KNEE TOUCH", gif: "./gif/knee.touch.crunch.gif" },
            { name: "TWIST CRUNCH", gif: "./gif/air.twist.crunch.gif" , rest: 30},
            { name: "FOREARM PUSHUP", gif: "./gif/elbow.updown.plank.gif" },
            { name: "SIDE PLANK UP", gif: "./gif/side.plank.rot.gif" },
            { name: "PLANK KNEE UP", gif: "./gif/elbow.knee.touch.gif" }
        ]
    }, 
	{
        id: "CH04",
        type: "preset",
        name: "LEG CORE",
        work: 45,
        rest: 3,
        sets: 9,
        gif: "./gif/glu.bridge.hip.abd.gif",
        playlist: [
            { name: "BUTTERFLY.FLAPS", gif: "./gif/buttfly.flap.gif"},
            { name: "GLUTE BRIDGE", gif: "./gif/glute.bridge.gif"},
            { name: "CAT STRETCH", gif: "./gif/cat.stretch.gif" },
            { name: "PELVIC TILT", gif: "./gif/pelvic.tilt.gif" },
            { name: "CHILD POSE", gif: "./gif/childpose.kneelpu.gif" },
            { name: "FROG CRUNCH", gif: "./gif/frog.crunch.gif" },
            { name: "BRIDGE HIP.ABD", gif: "./gif/glu.bridge.hip.abd.gif" },
            { name: "BENT LEG SIDE.K L", gif: "./gif/bent.leg.sideK.gif" },
            { name: "BENT LEG SIDE.K R", gif: "./gif/bent.leg.sideK.gif" }
        ]
    }, 
	{
        id: "CH05",
        type: "preset",
        name: "LEG BREAKER(WIP)",
        work: 30,
        rest: 1,
        sets: 21,
        gif: "./gif/ch05.gif",
        playlist: [
            { name: "PULSE SQUAT (5 TO 1)"},
            { name: "SUMO SQUAT & LUNGE"},
            { name: "IN&OUT JUMP SQUAT" , rest: 30},
            { name: "SQUAT TO CROSS RUNGE"},
            { name: "BACK RUNGE"},
            { name: "JUMP SQUAT" , rest: 30},
            { name: "PULSE LUNGE L"},
            { name: "PULSE LUNGE R"},
            { name: "WIDE SQUAT & CARP RAISE" , rest: 30},
            { name: "SQUAT TO CROSS RUNGE"},
            { name: "BACK RUNGE"},
            { name: "PULSE WIDE SQUAT", rest: 30},
            { name: "PULSE SQUAT (5 TO 1)"},
            { name: "SUMO SQUAT & LUNGE"},
            { name: "SQUAT TO CROSS RUNGE" , rest: 30},
            { name: "SUMO SQUAT & LUNGE"},
            { name: "IN&OUT JUMP SQUAT"},
            { name: "PULSE SQUAT (5 TO 1)" , rest: 30},
            { name: "SIDE SQUAT"},
            { name: "SQUAT TO CROSS RUNGE"},
            { name: "BACK RUNGE"}
     
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
