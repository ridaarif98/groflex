function AdminNotifications() {
    return (
      <div className="timeline-wrapper">
        <div className="timeline-header"></div>
        <div className="timeline-wrapper-inner">
            <div className="timeline-container">
                <div className="timeline-item is-unread">
                    <div className="date">
                        <span>Sep 23,2020</span>
                    </div>
                    <div className="dot is-info"></div>
                    <div className="content-wrap">
                        <div className="content-box">
                            <div className="status"></div>
                            <div className="h-avatar">
                              <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/13.jpg" alt="" data-user-popover="6" />
                            </div>
                            <div className="box-text">
                                <div className="meta-text">
                                    <p>
                                        <span>Tara S.</span>
                                        " added you to "
                                        <a href="#">" Barber Website Redesign Project"</a>
                                        .
                                    </p>
                                    <span>11:42 am</span>
                                </div>
                                <div class="box-end">
                                    <div class="h-avatar is-small">
                                        <img class="avatar" src="https://via.placeholder.com/150x150" data-demo-src="assets/img/avatars/photos/8.jpg" alt="" data-user-popover="3" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default AdminNotifications;