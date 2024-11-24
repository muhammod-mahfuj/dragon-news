import { useLoaderData } from "react-router-dom";
import CardNews from "../Components/CardNews";


const CategoryNews = () => {
    const { data} = useLoaderData();

    return (
        <div>
            <h2 className="font-bold text-2xl">Dragon news</h2>
            <p>Total {data.length} News</p>
            <div>
                {
                   data.map(singleNews => <CardNews key={singleNews.category_id} news={singleNews}></CardNews> )
                }
            </div>
        </div>
    );
};

export default CategoryNews;