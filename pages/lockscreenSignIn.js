import { motion } from 'framer-motion';
import React from 'react';
import LockscreenSignIn from '../components/LockscreenSignIn';

function lockscreenSignIn() {
    return (
        <LockscreenSignIn push={"/desktop"} text={"Welcome..."}/>
    );
}

export default lockscreenSignIn;
