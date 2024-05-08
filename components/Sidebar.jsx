export default function Sidebar(){
    return (

        <aside>
            <div className="sidebar">
                <div className="sidebar__content">
                    <ul className="sidebar__content__items">
                        <a class="sidebar__content__items__active" href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/service">Service</a>
                        <a href="/blog">Blog</a>
                    </ul>
                </div>
            </div>
        </aside>
    )
}