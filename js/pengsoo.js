const quotes = [
    { quote: "내가 힘든데 힘내라고 하면 힘이 납니까?<br/>그러니까 힘내라는 말보다 저는 사랑해라고 해주고 싶습니다" },
    { quote: "내가 나일 때 제일 좋은 거다" },
    { quote: "나이가 중요한 게 아니고 어른이고 어린이고 중요한 게 아닙니다<br/>이해하고 배려하고 존중하면 되는 거예요" },
    { quote: "부정적인 사람들은 도움 안 되니 긍정적인 사람들과 이야기해라" },
    { quote: "공부는 많이 해도 좋지만 너무 많이 해도 안 좋다<br />공부하는 것보다 행복한 게 중요합니다." },
    { quote: "원래 그래<br/>특별하면 외로운 별이 되지" },
    { quote: "백수가 아니라<br/>꿈을 찾아가는 중인 거지" },
    { quote: "세상에 친구는 많고 지구는 넓다<br/>여러분이 사랑하는 사람을 만나라" },
    { quote: "잘 쉬는 게 혁신이야" },
    { quote: "이유는 없어. 그냥 해" },
    { quote: "눈치 보지 말고 원하는 대로 살아라.<br/>눈치 챙겨." },
    {
        quote: "다 잘할 순 없어요. 펭수도 달리기는 조금 느립니다.<br/>하나 잘 못한다고 너무 속상해하지 마세요<br/>잘하는 게 분명 있을 겁니다. 그걸 더 잘 하면 돼요",
    },
    { quote: "처음엔 다들 힘들고 실수도 많아요.<br/>하지만 실수와 힘듦이 꽃을 피울 날이 올 겁니다" },
    {
        quote: "자신감은 자신에게 있다. 그걸 아직 발견 못한 거다.<br/>거울보고 난 할 수 있다, 난 멋진 사람이라고 생각하면 충분히 가능하다.<br/>자신을 믿고 사랑하라",
    },
    { quote: "취향은 사람마다 다른 거니까<br/>취향은 존중해주길 부탁해^^" },
];

const quote = document.querySelector("#quote span");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = todaysQuote.quote;