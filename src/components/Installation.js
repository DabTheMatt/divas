import React, { Component } from 'react';
import styled from "styled-components";

class Installation extends Component {
    render() {
        return (
            <div>
                <h2 id="installation">Installation</h2>
                <p>Install XAMPP</p>
                <p>Install PHP Intelephense by Ben Mewburn (for VSC)</p>
                <p>run XAMMP and check localhost/dashboard for apache and localhost/myphpadmin for mysql (are they working?)</p>
            </div>
        );
    }
}

export default Installation;