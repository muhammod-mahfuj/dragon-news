

const CardNews = ({news}) => {
    console.log(news)
    return (
        <div className="mb-5 space-y-2">
            <img src={news.image_url} alt="" />
            <h2 className="font-bold text-xl" >{news.title}</h2>
            <p>{news.details}</p>
        </div>
    );
};

export default CardNews;