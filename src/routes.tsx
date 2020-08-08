import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom' /* BrowserRouter e Route: devem ser incluídos */
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

/* instalar gerenciador de rotas: yarn add react-router-dom
 * seguido de:                    yarn add @types/react-router-dom
 */

 function Routes() {
   return ( /* exact: caso não use, vai chamar a Landing sempre (junto com a rota correta), pois '/' é chamado em todas as rotas */
     <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
     </BrowserRouter>
   )
 }

 export default Routes