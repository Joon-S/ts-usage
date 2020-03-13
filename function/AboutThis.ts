let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() { // function 부분 인자를 this: Deck 으로 바꾸면 this 는 이제 타입추론 가능!
        // 주의: 아래 줄은 이제 화살표 함수입니다. 여기에서 'this'를 캡처할 수 있습니다.
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

// 위에 코드의 문제점은 여전히 10번줄에 this 가 any 라는 문제
// 위 방법을 해결하기위해선 인터페이스써서 확인해주는게 최고인듯함

interface Card {
    suit: string
    card: number
}

interface Deck {
    suits: string[]
    cards: number[]
    createCardPicker(this: Deck): () => Card
}
