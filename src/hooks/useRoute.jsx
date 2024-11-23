import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { RegisterPage } from '../pages/RegisterPage';
import { FeedbackPage } from '../pages/FeedbackPage';

export function useRoute(user) {

    if (user) {
        return (
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<Navigate to='/' />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/feedback' element={<FeedbackPage />} />
            <Route path='*' element={<Navigate to='/login' />} />
        </Routes>
    )

}