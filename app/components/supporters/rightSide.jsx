const RightSide = () => {

    const image = 'https://www.aelfc.gr/wp-content/uploads/2022/09/202209020314120276.jpg'

    return (
        <div className="d-flex flex-column gap-2 sidebar">
            <a href="#"><img src={image} class="img-fluid" alt="..." /></a>
            <a href="#"><img src={image} class="img-fluid" alt="..." /></a>
            <a href="#"><img src={image} class="img-fluid" alt="..." /></a>
            <a href="#"><img src={image} class="img-fluid" alt="..." /></a>
            <a href="#"><img src={image} class="img-fluid" alt="..." /></a>
        </div>
    )
}

export default RightSide