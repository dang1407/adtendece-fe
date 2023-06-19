import React from 'react';

const Classes = () => {
    return (
        <div>
            {/* Header */}
            <div className="container-fluid">
                <nav className="navbar navbar-expand-sm border-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    <div className="container-fluid">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <ion-icon name="home-outline" className="display-6"></ion-icon>
                                </a>
                            </li>
                        </ul>
                        <ul>
                            <li className="nav-item ms-auto">
                                <a className="nav-link" href="#">
                                    <ion-icon name="sad-outline" className="display-6"></ion-icon>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

            <div className="container-fluid">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-2 bg-secondary" style={{ height: '100vh' }}>
                        <div className="sidebar">
                            {/* Nội dung sidebar */}
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-dark bg-light  active" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark bg-light" href="#">Bài kiểm tra</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark bg-light" href="#">Lớp học</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Nội dung chính */}
                    <div className="col-md-8">
                        <div className="main-content">
                            <h1>Nội dung chính</h1>
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-1">
                                        <div className="square bg-light">
                                            {/* Nội dung ô vuông 1 */}
                                            <p>#1</p>
                                            <p>19/3</p>
                                        </div>
                                    </div>
                                    {/* Repeat the above code for other columns */}
                                    <div className="col-sm-1">
                                        <div className="square bg-light">
                                            {/* Nội dung ô vuông 2 */}
                                            <p>#2</p>
                                            <p>26/3</p>
                                        </div>
                                    </div>
                                    <div className="col-sm-1">
                                        <div className="square bg-light">
                                            {/* Nội dung ô vuông 3 */}
                                            <p>#3</p>
                                            <p>2/4</p>
                                        </div>
                                    </div>
                                    {/* Repeat the above code for other columns */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid">
                <footer className="bg-light text-center text-lg-start" style={{
                    position: 'fixed',
                    left: 0,
                    bottom: 0,
                    width: '100%',
                    backgroundColor: '#f8f9fa',
                    textAlign: 'center'
                }}>
                    {/* Copyright */}
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                        © 2023 Copyright:
                        <a className="text-dark" href="https://hust.edu.vn/">Đại học Bách Khoa Hà Nội</a>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        </div>
    );
};

export default Classes;
