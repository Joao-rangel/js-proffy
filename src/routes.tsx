import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom' /* BrowserRouter e Route: devem ser incluídos */
import Landing from './pages/Landing'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

/* instalar gerenciador de rotas: yarn add react-router-dom
 * seguido de:                    yarn add @types/react-router-dom
 */

 function Routes() {
   return (
     <BrowserRouter>
      <Route path="/" component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
     </BrowserRouter>
   )
 }

 export default Routes