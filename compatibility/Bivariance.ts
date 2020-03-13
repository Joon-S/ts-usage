enum EventType { Mouse, Keyboard}

interface Event {
    timestamp: number
}

interface MouseEvent extends Event {
    // @ts-ignore
    x: number
    // @ts-ignore
    y: number
}

function listenEvent(eventType: EventType, handler: (n: Event) => void) {
    // ....
}

// best
listenEvent(EventType.Keyboard, (e: MouseEvent) => console.log(e.x + ", " + e.y))

// 안정성에서 바람직하지 않은 대안
listenEvent(EventType.Mouse, (e: Event) => console.log((<MouseEvent>e).x + "," + (<MouseEvent>e).y));
listenEvent(EventType.Mouse, <(e: Event) => void>((e: MouseEvent) => console.log(e.x + "," + e.y)));

//그래도 허용되지 않습니다(명확한 오류). 완전히 호환되지 않는 유형에 대해 적용되는 타입 안전성(Type safety)
//listenEvent(EventType.Mouse, (e: number) => console.log(e));
