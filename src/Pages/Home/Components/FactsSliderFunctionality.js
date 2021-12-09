//img
import raspberry from "../img/raspberry.png";
import lemon from "../img/lemon.png";
import blackberry from "../img/blackberry.png";
import banana from "../img/banana.jpg.png";
import watermelon from "../img/watermelon.png";
import passionfruit from "../img/passionfruit.png";

//state
export const FactsObject = {
    Fact1 : {
        img: raspberry,
        title: "Wczesne ostrzeżenia",
        p: "W Polsce problem nadwagi i otyłości dotyczy 10% małych dzieci i 30% dzieci w wieku wczesnoszkolnym.",
        id: 1,
    },
    Fact2 : {
        img: watermelon,
        title: "Wspólne posiłki",
        p: "Z badań wynika, że wspólne posiłki w domu zapobiegają nadwadze i otyłości u dzieci.",
        id: 2,
    },
    Fact3 : {
        img: lemon,
        title: "Warzywa i owoce",
        p: "Tylko ok. 43% dzieci w Europie spożywa codziennie świeże warzywa i owoce",
        id: 3,
    },
    Fact4 : {
        img: blackberry,
        title: "Dziedziczna otyłość",
        p: "30% otyłych dzieci ma również otyłych rodziców",
        id: 4,
    },
    Fact5 : {
        img: banana,
        title: "Pierwsze lata są podstawą",
        p: "Wykształtowane nawyki żywieniowe w pierwszych latach życia dziecka są podstawą do przyszłych wzorców żywieniowych.",
        id: 5,
    },
    Fact6 : {
        img: passionfruit,
        title: "Ruch jest zaraźliwy",
        p: "Dzieci rodziców uprawiających sport rekreacyjnie częściej czerpią przyjemność z aktywności fizycznej",
        id: 6,
    },
};

export const FactSlotsPositionData = {
    FirstFactSlot: {
        position: "absolute",
        top : 2,
        left : -45,
        opacity : 100,
        width : 20,
        z : 1,
    },
    SecondFactSlot: {
        position: "absolute",
        top: 1,
        left : 0,
        opacity : 100 ,
        width : 20,
        z : 2,
    },
    ThirdFactSlot: {
        position: "absolute",
        top : 2,
        left : 45,
        opacity : 100 ,
        width : 20,
        z : 1,
    },
    FourthFactSlot: {
        position: "absolute",
        top : 3,
        left : -43,
        opacity : 0,
        width : 21,
        z : 0,
    },
    FifthFactSlot: {
        position: "absolute",
        left : 0,
        opacity : 0,
        width : 21,
        z : 1,
    },
    SixthFactSlot: {
        position: "absolute",
        top : 3,
        left : 43,
        opacity : 0,
        width : 21,
        z : 0,
    },
};

export function positioner (position, firstFactSlot, secondFactSlot, thirdFactSlot, fourthFactSlot, fifthFactSlot, sixthFactSlot) {
    let positionObject = {};

    if (position == "left-top") {
        positionObject = firstFactSlot
    };

    if (position == "middle-top") {
        positionObject = secondFactSlot
    };

    if (position == "right-top") {
        positionObject = thirdFactSlot;
    };

    if (position == "left-bot") {
        positionObject = fourthFactSlot;
    };
    if (position == "middle-bot") {
        positionObject = fifthFactSlot;
    };
    if (position == "right-bot") {
        positionObject = sixthFactSlot;
    };

    return positionObject;
};
