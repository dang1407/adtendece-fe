import React from 'react';

const Home = () => {
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

            <div className="container">
                <div className="row">
                    {/* Sidebar */}
                    <div className="col-md-3 bg-secondary" style={{ height: '100vh' }}>
                        <div className="sidebar">
                            {/* Nội dung sidebar */}
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link text-dark bg-light  active" href="#">Trang chủ</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-dark bg-light" href="#">Bài kiểm tra</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Nội dung chính */}

                    <div className="col-md-9">
                        <div className="main-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="square bg-light">
                                            {/* Nội dung ô vuông 1 */}
                                            <p>Công nghệ web và dịch vụ trực tuyến</p>
                                            <p>TC-312</p>
                                            <p>Mã lớp: LT + BT</p>
                                            <p>Mã HP: IT4409</p>
                                            <p>Giảng viên: Đào Thành Chung Đỗ Bá Lâm</p>
                                            <p>Thời gian: thứ 3, 12h30 - 15h</p>
                                            <p>Tuần học: 25-32, 34-42</p>
                                        </div>
                                    </div>
                                    {/* Repeat the above code for other columns */}
                                </div>
                                <div className="row">
                                    {/* Repeat the above code for other rows */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="container-fluid">
                <footer className="bg-light text-center text-lg-start">
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

export default Home;
