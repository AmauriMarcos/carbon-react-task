import './app.scss';
import { Content, Theme } from '@carbon/react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import LandingPage from './content/LandingPage/LandingPage';
import Arena from './content/Arena/Arena';
import Challenges from './content/Challenges/Challenge';
import Concepts from './content/Concepts/Concepts';
import Creators from './content/Creators/Creators';
import Dashboard from './content/Dashboard/Dashboard';
import Earn from './content/Earn/Earn';
import Analitics from './components/LeftSidebarFeatures/Analitics';
import Amount from './components/LeftSidebarFeatures/Amount';
import AppSettings from './components/LeftSidebarFeatures/AppSettings';
import Chart from './components/LeftSidebarFeatures/Chart';
import Collaborate from './components/LeftSidebarFeatures/Collaborate';
import Connection from './components/LeftSidebarFeatures/Connection';
import DataSet from './components/LeftSidebarFeatures/DataSet';
import Events from './components/LeftSidebarFeatures/Events';
import Statistics from './components/LeftSidebarFeatures/Sigma';
import TreeView from './components/LeftSidebarFeatures/TreeView';
import UserSettings from './components/LeftSidebarFeatures/UserSettings';
import NetWorking from './components/LeftSidebarFeatures/Networking';

function App() {

  /* In order to apply the DRY (Don't repeat yourself) principle
     I've created two arrays of objects. 
     The mainRouteArr is responsible to dynamically pass data to Parent Route
      */
  const mainRouteArr = [
    {id: 1, path: 'dashboard', element: <Dashboard /> },
    {id: 1, path: 'creators', element: <Creators /> },
    {id: 1, path: 'earn', element: <Earn /> },
    {id: 1, path: 'challenges', element: <Challenges /> },
    {id: 1, path: 'concepts', element: <Concepts /> },
    {id: 1, path: 'Arena', element: <Arena /> },
  ]

  /* RoutesArr is in charge of the nested routes */

  const RoutesArr = [
    {id: 1, path: 'analitics', element: <Analitics title="analitics" />},
    {id: 2, path: 'concepts', element: <Concepts title="concepts" />},
    {id: 3, path: 'tree-view', element: <TreeView title="tree view" />},
    {id: 4, path: 'collaborate', element: <Collaborate title="collaborate" />},
    {id: 5, path: 'statistics', element: <Statistics title="statistics" />},
    {id: 6, path: 'networking', element: <NetWorking title="networking" />},
    {id: 7, path: 'data-set', element: <DataSet title="data-set" />},
    {id: 8, path: 'amount', element: <Amount title="amount" />},
    {id: 9, path: 'chart', element: <Chart title="chart" />},
    {id: 10, path: 'connection', element: <Connection title="connection" />},
    {id: 11, path: 'events', element: <Events title="events" />},
    {id: 12, path: 'app-settings', element: <AppSettings title="app-settings" />},
    {id: 12, path: 'user-settings', element: <UserSettings title="user-settings" />},

  ]
  return (
    <>
      <Theme theme="g90">
        <Header />
      </Theme>

      <Theme theme="g100">
        <Content>
          <Routes>
            <Route path="/">
              <Route
                index
                element={
                  <LandingPage />
                }
              />
              {mainRouteArr?.map((mainRoutes) => (
                  <Route key={mainRoutes.id} path={mainRoutes.path}>
                    <Route index element={mainRoutes.element} />
                      {RoutesArr?.map(({id, path, element}) => (
                        <Route
                          key={id}
                          path={path}
                          element={element}
                      />
                      ) )}
                </Route>
              ))}

            </Route>
          </Routes>
        </Content>
      </Theme>

    </>
  );
}

export default App;
