import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Header,
    HeaderContainer,
    HeaderName,
    HeaderNavigation,
    HeaderMenuButton,
    HeaderMenuItem,
    HeaderGlobalBar,
    HeaderGlobalAction,
    SkipToContent,
    SideNav,
    SideNavItems,
    SideNavMenu,
    SideNavMenuItem,
    SideNavLink,
    Theme
} from '@carbon/react';
import { Collaborate, Percentage, ChartSunburst, Concept, Router, DataSet, Sigma, Activity, TreeView, EventsAlt, SettingsAdjust, Switcher, Notification, UserAvatar, Help, Wallet, GameConsole, Search, Fade } from '@carbon/react/icons';

const TutorialHeader = () => {
    /* I'm using useLocation to get the current path */
    const location = useLocation();
    const firstPath = location.pathname?.split('/')[1];
    const secondPath = location.pathname?.split('/')[2];
    
    /* I've create this array of objects to avoid repeating components.  */

    const sideBarFeatures = [
        {id: 1, path: '/analitics', name: 'Analitics', icon: Activity},
        {id: 2, path: '/concepts', name: 'Concepts', icon: Concept},
        {id: 3, path: '/tree-view', name: 'Tree view', icon: TreeView},
        {id: 4, path: '/events', name: 'Events', icon: EventsAlt},
        {id: 5, path: '/statistics', name: 'Statistics', icon: Sigma},
        {id: 6, path: '/networking', name: 'Networking', icon: Router},
        {id: 7, path: '/data-set', name: 'Data set', icon: DataSet},
        {id: 8, path: '/amount', name: 'Amount', icon: Percentage},
        {id: 9, path: '/chart', name: 'Chart', icon: ChartSunburst},
        {id: 10, path: '/collaborate', name: 'Collaborate', icon: Collaborate},
        {id: 11, path: '/app-settings', name: 'Settings', icon: SettingsAdjust},
        {id: 12, path: '/user-settings', name: 'User Settings', icon: SettingsAdjust},
    ]


    /* myCurrentLocation function will check if the current location path matches*/
    const myCurrentLocation = (currentPage) => {
        /* Here I have two scenarios: I want the property aria-current to be true if
           the initial path matches my current location AND
           It's going to be true as well if the sidebar navigation path matches the
           current location */
        if (location.pathname === currentPage || 
            location.pathname === currentPage + "/" + secondPath ) {
            return 'page'
        } else {
            return ''
        }
    }

    const HeaderIcons = [
        {id: 1, arialLabel: 'Notifications', alignment: 'center', headerIcon: <Search size={20} /> },
        {id: 2, arialLabel: 'Notifications', alignment: 'center', headerIcon: <GameConsole size={20} />},
        {id: 3, arialLabel: 'Notifications', alignment: 'center', headerIcon: <Wallet size={20} /> },
        {id: 4, arialLabel: 'Notifications', alignment: 'center', headerIcon: <Help size={20} /> },
        {id: 5, arialLabel: 'Notifications', alignment: 'center', headerIcon: <Notification size={20} />},
        {id: 6, arialLabel: 'User Avatar', alignment: 'center', headerIcon: <UserAvatar size={20} /> },
        {id: 7, arialLabel: 'App Switcher', alignment: 'end', headerIcon: <Switcher size={20} /> },

    ];
   
    return (
        <HeaderContainer
            render={({ isSideNavExpanded, onClickSideNavExpand }) => (
                <Header aria-label="Carbon Tutorial">
                    <SkipToContent />
                    <HeaderMenuButton
                        isCollapsible
                        aria-label="Open menu"
                        onClick={onClickSideNavExpand}
                        isActive={isSideNavExpanded}
                    />
                   
                    <HeaderName element={Link} to="/" prefix="">
                        Ebrai Conceptualizer
                    </HeaderName>
            
                    <HeaderNavigation aria-label="Carbon Tutorial">
                        <HeaderMenuItem aria-current={myCurrentLocation('/dashboard')} element={Link} to="/dashboard" >Dashboard</HeaderMenuItem>
                        <HeaderMenuItem aria-current={myCurrentLocation('/creators')} element={Link} to="/creators" >Creators</HeaderMenuItem>
                        <HeaderMenuItem aria-current={myCurrentLocation('/earn')} element={Link} to="/earn" >Earn</HeaderMenuItem>
                        <HeaderMenuItem aria-current={myCurrentLocation('/challenges')} element={Link} to="/challenges" >Challenges</HeaderMenuItem>
                        <HeaderMenuItem aria-current={myCurrentLocation('/concepts')} element={Link} to="/concepts" >Concepts</HeaderMenuItem>
                        <HeaderMenuItem aria-current={myCurrentLocation('/Arena')} element={Link} to="/Arena" >Arena</HeaderMenuItem>
                    </HeaderNavigation>

                    <SideNav                    
                        aria-label="Side navigation"
                        isRail
                        expanded={isSideNavExpanded}
                        onOverlayClick={onClickSideNavExpand}
                    >
                        <SideNavItems >
                            {sideBarFeatures.map((feature) => (
                                <SideNavLink 
                                    aria-current={location.pathname === "/" + firstPath + feature.path ? 'page' : ''} 
                                    key={feature.id}
                                    renderIcon={feature.icon}
                                    element={Link}
                                    to={"/" + firstPath + feature.path}>
                                    {feature.name}
                                </SideNavLink>
                            ))}
              
                        </SideNavItems>
                    </SideNav>
                    
                    <HeaderGlobalBar>
                        {HeaderIcons?.map(({id, arialLabel, alignment, headerIcon}) => (
                            <HeaderGlobalAction key={id} aria-label={arialLabel} tooltipAlignment={alignment}>
                                {headerIcon}
                            </HeaderGlobalAction>
                        ))}                   
                    </HeaderGlobalBar>
                </Header>
            )}
        />
    )
}

export default TutorialHeader;