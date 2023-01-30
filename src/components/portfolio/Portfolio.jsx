import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/quizeApp.png'
import IMG2 from '../../assets/todolist.png'
import IMG3 from '../../assets/recipeApp.png'
import IMG4 from '../../assets/myjournal.png'

const data = [
    {
        id: 1,
        image: IMG1,
        title: 'QuizApp',
        github: "https://github.com/ssoyeonisgood/quizeApp",
        demo: "https://ssoyeonisgood.github.io/QuizApp/"
    },
    {
        id: 2,
        image: IMG2,
        title: 'ToDoList',
        github: "https://github.com/ssoyeonisgood/to_do_list",
        demo: "https://ssoyeonisgood.github.io/ToDoList/"
    },
    {
        id: 3,
        image: IMG3,
        title: 'RecipeApp',
        github: "https://github.com/ssoyeonisgood/recipeApp",
        demo: "https://ssoyeonisgood.github.io/RecipeApp/"
    },
    {
        id: 4,
        image: IMG4,
        title: 'My Journal',
        github: "https://github.com/ssoyeonisgood/MyJournal",
        demo: ""
    }
]

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2 className='heading'>Portfolio</h2>

            <div className='container portfolio__container'>
                {
                    data.map(({id, image, title, github, demo}) => {
                        return(
                            <article key={id} className='portfolio__item'>
                            <div className="portfolio__item-image">
                                <img src={image} alt={title} />
                            </div>
                            <h3>{title}</h3>
                             <div className='portfolio__item-cta'>
                                <a href={github} className='btn' target='_blank'>Github</a>
                                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                            </div>
                            </article>
                            )
                        })  
                    }
            </div>
        </section>
    )
}

export default Portfolio