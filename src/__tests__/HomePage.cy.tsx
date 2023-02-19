import cypress,{mount} from 'cypress/react18'
import HomePage from '../pages/HomePage'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import '../index.css'

describe('<HomePage>', () => {
  it('mounts', () => {
    mount(
   <MemoryRouter>
       <Routes>
        <Route path={'/'} element={<HomePage />} />
      </Routes>
   </MemoryRouter>

    ).get('Button').should('have.length',100)
  })
})