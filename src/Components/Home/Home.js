import React, { Component } from 'react'
// import forest from './backgrounds/bridge.jpg'
// import logo from './backgrounds/airbnb-red.png'
// import whiteLogo from './backgrounds/airbnb-512.png'
// import { BookingCardInput, BookingCardButton, CancelButton, LoginButton, CounterButton } from './../StyledComponents/StyledComponents'
import axios from 'axios'


class Home extends Component {
    constructor() {
        super()

        this.state = {
            toggleLogin: false,
            toggleSignup: false,
            first_name: '',
            last_name: '',
            profile_pic_url: '',
            phone: '',
            email: '',
            password: '',
            toggleGuests: false,
            currentWhere: '',
            guests: 0,
            startDate: '',
            endDate: '',
            togglePassword: true,
            sliderAmount: 0,
            showHelpMenu: false,
        }
    }

    async login() {
        const { email, password } = this.state
        const response = await axios.post('/auth/login', { email, password })
        if (response.data.loggedIn) {
            // this.props.history.push('/')
            console.log('user is logged in')
        }
        else {
            console.log('Incorrect login')
        }
        this.setState({
            email: '',
            password: '',
            toggleLogin: false
        })
        window.location.reload()
    }

        async register() {
            const { first_name, last_name, phone, email, password, profile_pic_url } = this.state
            let response = await axios.post('auth/register', { first_name, last_name, phone, profile_pic_url, email, password })
            if (response.data.loggedIn) {
                console.log('user is registered')
            }
            else {
                console.log('email is already in use.')
            }
            this.setState({
                first_name: '',
                last_name: '',
                profile_pic_url: '',
                phone: '',
                email: '',
                password: '',
                toggleSignup: true
            })
        }

        handleInputChange(name, value) {
            this.setState({
                [name]: value
            })
        }
    
        handleAddGuests = () => {
            this.setState({
                guests: this.state.guests + 1
            })
        }
        handleSubtractGuests = () => {
            if (this.state.guests >= 1) {
                this.setState({
                    guests: this.state.guests - 1
                })
            }
            else {
                this.setState({
                    guests: 0
                })
            }
        }

        render(){
            return (
                <div>

                </div>
            )
        }
    }

    export default Home



































