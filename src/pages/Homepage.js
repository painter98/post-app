import Cards from "../Components/Card";

const HomePage = ({data}) => {
    return(
        <div className="post-grid">
        {data.map((post,idx) => {
          return <Cards key={idx} post={post}></Cards>
        })}
      </div>
    )

}

export default HomePage;