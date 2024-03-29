// LeftMenu.jsx

import React from 'react';
import './LeftMenu.css'; // Import the LeftMenu.css file

function LeftMenu() {
  return (
    <div className="grid_2" id="">
      <p><br></br></p>
      <ul id="verticalmenu" className="glossymenu">
        <li><a href="swayam-moocs-dept-coordinators.html" target="_blank">Department Co-ordinators</a></li>
        <li><a href="swayam-moocs-student-notices.html" target="_blank">Students</a></li>
        <li><a href="swayam-moocs-faculty-notices.html" target="_blank">Faculty</a></li>
        <li><a href="swayam-moocs-enrollments.html" target="_blank">Enrollments</a></li>
        <li><a href="swayam-moocs-student-certifications.html" target="_blank">Students</a></li>
        <li><a href="swayam-moocs-faculty-certifications.html" target="_blank">Faculty</a></li>
        <li><a href="swayam-moocs-achievements.html" target="_blank">Achievements</a></li>
        <li><a href="swayam-moocs-useful-links.html" target="_blank">Useful Links</a></li>
      </ul>
    </div>
  );
}

export default LeftMenu;
