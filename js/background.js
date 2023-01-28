const images = ["pengsoo1.png", "pengsoo2.png", "pengsoo3.png", "pengsoo4.png"];
const colorList = [
    {
        id: "yl",
        color: "#FDFFB2",
    },
    {
        id: "gn",
        color: "#B7E3CC",
    },
    {
        id: "lv",
        color: "#E6D8F2",
    },
    {
        id: "pc",
        color: "#FCDFD9",
    },
    {
        id: "pk",
        color: "#FDDFE7",
    },
    {
        id: "sb",
        color: "#C8E2F9",
    },
    {
        id: "gy",
        color: "#E1E1E1",
    },
    {
        id: "mn",
        color: "#C1DEDC",
    },
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

document.body.style.backgroundColor = colorList[Math.floor(Math.random() * colorList.length)].color;
