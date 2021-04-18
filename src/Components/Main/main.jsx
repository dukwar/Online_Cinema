import cl from './main.module.scss'

function Main({children}) {
    return (
        <div className={cl.container}>
            {children}
        </div>
    );
}

export default Main;
