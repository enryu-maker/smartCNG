import { View, Text, SafeAreaView, Platform } from 'react-native'
import React from 'react'
import Auth from './Auth'
import Home from './Home'
import { useDispatch, useSelector } from 'react-redux';
import { Init } from '../../store/Actions/AuthAction';
import { getLocation } from '../../store/Actions/userActions';

export default function Index() {
    const access = useSelector((state) => state.main.access);
    const [loading, setLoading] = React.useState(false)
    const dispatch = useDispatch()
    React.useEffect(() => {
        dispatch(Init())
        dispatch(getLocation(setLoading, Platform.OS))
    }, [dispatch])

    return (
        <>
            {
                access != null ? <Home /> : <Auth />
            }
        </>
    )
}