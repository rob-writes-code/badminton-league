import React from 'react';
import styles from './ScoreCard.module.scss';

import { Form, Button, Container, Col, Row, Table } from 'react-bootstrap';

const ScoreCard = () => {
    return (
        <Container>
            <section>
                <div className={`${styles.title}`}>
                    <h1>Bristol Badminton League</h1>
                </div>
                <div>
                    <Row>
                        <Col><h5>Mens League</h5></Col>
                        <Col className='text-center'><h5>Division 1</h5></Col>
                        <Col className='text-end'><h5>01/12/2022</h5></Col>
                    </Row>
                </div>
            </section>

            <br />

            <section>
                <h5>Home Team: Academy</h5>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Affiliation Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mick Jackson</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Grizzly Pete</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Penny Turbo</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Louie Viton</td>
                            <td>1234567</td>
                        </tr>
                    </tbody>
                </Table>

                <br />

                <h5>Away Team: Broadlands</h5>
                <Table striped bordered hover size='sm'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Player Name</th>
                            <th>Affiliation Number</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>A</td>
                            <td>Desmond Tutu</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>B</td>
                            <td>Apatchi Bob</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>C</td>
                            <td>Fats Domino</td>
                            <td>1234567</td>
                        </tr>
                        <tr>
                            <td>D</td>
                            <td>Magic Steve</td>
                            <td>1234567</td>
                        </tr>
                    </tbody>
                </Table>
            </section>
        </Container>
    )
}

export default ScoreCard;