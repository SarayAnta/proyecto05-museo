import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
// import Nav from '../src/components/nav/Nav';
import Footer from '../src/components/footer/footer';
import Home from '../src/components/home/Home';
import NewItem from '../src/components/newitem/NewItem';


test('render Footer', ()=> {
    render(<Footer/>);
    const imgCopyright = screen.getByAltText('Copyright');
    expect(imgCopyright).toBeInTheDocument();
});

test('render Footer 2', () => {
    render(<Footer/>);
    const imgGit = screen.getByRole('img', { name: 'GitHub'});
    expect(imgGit).toBeInTheDocument();
});

// test('render Nav', () => {
//     render(<Nav/>);
//     const mainHeading = screen.getByRole('heading', { level: 1 });
//     expect(museoBicicletas).toBeInTheDocument();
// })

test('render img Background in Home', ()=> {
    render(<Home/>)
    const imgs = screen.getAllByRole('img');
    const backgroundImg = Array.from(imgs).find(img => img.classList.contains('background-img'));
    expect(backgroundImg).toBeInTheDocument();
});

test('render Title in Home', () => {
    render(<Home/>)
    const title = screen.getByRole('heading', { level: 2});
    expect(title).toBeInTheDocument();
});

test('Add button appears in add form', () => {
    render(<NewItem/>)
    const submitButton = screen.getByRole('button', { name: 'Añadir' });
    expect(submitButton).toBeInTheDocument();
})