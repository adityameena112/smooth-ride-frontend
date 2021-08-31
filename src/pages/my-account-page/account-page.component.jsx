import React from 'react'
import './account-page.styles.scss';


function AccountPage() {
    return (
        <div className='account-page'>
            <div class="page">
                <div class="navbar">
                    <div class="user">
                        <div class="user__name">Akash Poddar</div>
                    </div>
                    <div class="bar">
                        <div class="options">
                            <ul>
                                <li class="active">Homepage</li>
                                <li>My Account</li>
                                <li>My E-Wallet</li>
                                <li>Ride history</li>
                                <li>Payment history</li>
                                <li>Complaints</li>
                                <li>Your Reviews</li>
                            </ul>
                        </div>
                        <div class="settings">
                            <ul>
                                <li class="acc-settings"><i class="fas fa-cog"></i> Account Settings</li>
                                <li><i class="fas fa-sign-out-alt"></i> Logout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountPage;