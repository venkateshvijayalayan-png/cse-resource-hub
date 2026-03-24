import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resources.html',
  styleUrl: './resources.css',
})
export class Resources {
  resource = [
    { title: '🧠 Introduction to Algorithms', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=0IAPZzGSbME' },

    { title: '💻 Operating System Concepts', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=BTjxUS_PylA' },

    { title: '⚙️ Data Structures Full Course', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=RBSGKlAvoiM' },

    { title: '🗄️ Database Management Systems (DBMS)', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=HXV3zeQKqGY' },

    { title: '🌐 Computer Networks Basics', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=qiQR5rTSshw' },

    { title: '📊 Algorithms Full Course', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=8hly31xKli0' },

    { title: '🤖 Artificial Intelligence Full Course', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=JMUxmLyrhSk' },

    { title: '📈 Machine Learning Basics', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=Gv9_4yMHFhI' },

    { title: '💡 C++ Programming Full Course', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=vLnPwxZdW4Y' },

    { title: '🐍 Python Programming Tutorial', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=_uQrJ0TkZlc' },

    { title: '🌍 Web Development Full Course', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=Q33KBiDriJY' },

    { title: '🔧 Git & GitHub Tutorial', type: '📺 Youtube', link: 'https://www.youtube.com/watch?v=RGOj5yH7evk' }

  ]

}
