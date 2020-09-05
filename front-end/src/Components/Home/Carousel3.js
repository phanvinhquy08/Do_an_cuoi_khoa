import React, { Component, useState } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption,
    Container
} from 'reactstrap';
import "./Carousel3.css";
import CommonButton from '../Common/CommonButton';
const data = [
    {
        "id": 2,
        "img": "https://i.imgur.com/rU3CY3E.jpg",
        "banner": "https://i.imgur.com/t5hj4Gg.jpg",
        "name": "ÁC QUỶ RỪNG SÂU - BABA YAGA",
        "time": 97,
        "kind": " Kinh dị,Hành động",
        "premiere": "05/22/2020",
        "author": "Svyatoslav Podgaevsky",
        "character": "Oleg Chugunov, Glasha Golubeva, Artem Zhigulin, Igor Khripunov, Svetlana Ustinova",
        "language": "Phụ đề Tiếng Việt",
        "rate": 7.5,
        "playing": true,
        "digital2D": true,
        "imax3D": false,
        "content": "Ác Quỷ Rừng Sâu kể về một cặp vợ chồng trẻ đang tìm kiếm bảo mẫu để chăm sóc đứa con gái mới chào đời. Thế nhưng người được thuê về lại khiến cả đứa bé ấy và cậu con trai lớn Egor kinh sợ. Một ngày, Egor phát hiện người bảo mẫu và em gái mình biến mất một cách đầy bí ẩn"
    },
    {
        "id": 3,
        "img": "https://i.imgur.com/hJlve6j.jpg",
        "banner": "https://i.imgur.com/LBz20zS.jpg",
        "name": "KẺ ĐÀO TẨU GIẤC MƠ - COMA",
        "time": 120,
        "kind": "Viễn tưởng,Phiêu lưu",
        "premiere": "05/29/2020",
        "author": "Nikita Argunov",
        "character": "Rinal Mukhametov, Anton Pampushnyy, Lyubov Aksyonova, Miloš Biković, Konstantin Lavronenko",
        "language": "Phụ đề Tiếng Việt",
        "rate": 7.5,
        "playing": true,
        "digital2D": true,
        "imax3D": false,
        "content": "Một kiến trúc sư trẻ tài năng tỉnh dậy sau một tai nạn kinh hoàng và phát hiện rằng anh ta đang lạc trong một thế giới khác kỳ lạ và hỗn loạn. Thế giới đó được gọi là COMA và ở đó những toà nhà, những dòng sông và thành phố đều có thể tồn tại trong cùng một không gian của một căn phòng. Những định luật vật lý anh được học không còn đúng ở thế giới này và bên cạnh việc thích nghi, anh ta còn phải chiến đấu để bảo vệ mạng sống của mình cũng như tìm cách để thoát ra, trở về với thế giới thực..."
    },
    {
        "id": 4,
        "img": "https://i.imgur.com/KL7CL8D.jpg",
        "banner": "https://i.imgur.com/UyLvx20.jpg",
        "name": "TRẬN CHIẾN MIDWAY",
        "time": 137,
        "kind": "Hành động",
        "premiere": "05/29/2020",
        "author": "Roland Emmerich",
        "character": " Ed Skrein, Patrick Wilson, Luke Kleintank, Luke Evans, Woody Harrelson",
        "language": "Phụ đề Tiếng Việt",
        "rate": 8.5,
        "playing": true,
        "digital2D": true,
        "imax3D": false,
        "content": "Trận Chiến Midway lấy bối cảnh trong Thế Chiến thứ 2 sau sự kiện Trân Châu Cảng nổi tiếng, tái hiện trận đánh lịch sử Midway - điểm nóng quan trọng tại Thái Bình Dương"
    }
]

const Carousel3 = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const { history } = props;
    const slides = data.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.id}

            >
                <div className="blur2" />
                <Container>
                    <div className="carousel-content">
                        <h3>{item.name}</h3>
                        <h4>{item.kind}</h4>
                        <p>{item.content}</p>
                        <CommonButton
                            children="Book now"
                            style={{ transform: "scale(1.4)", marginLeft: "16px" }}
                            onClick={() => history.push("/movies/" + item.id)}
                        />
                    </div>
                </Container>
                <img src={item.banner} alt={item.id} style={{ width: "100%", height: "100%" }} />
            </CarouselItem>
        );
    });

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    );
}
export default Carousel3