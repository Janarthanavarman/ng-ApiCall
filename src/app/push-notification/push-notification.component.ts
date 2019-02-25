
import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import { PushNotificationService} from '../push-notification.service';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
  private title: string = 'Browser Push Notifications!';
  constructor(private _notificationService: PushNotificationService) {
      this._notificationService.requestPermission();
  }
  ngOnInit() {}
  notify() {
      let data: Array < any >= [];
      data.push({
          'title': 'Approval',
          'alertContent': 'This is First Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Request',
          'alertContent': 'This is Second Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Leave Application',
          'alertContent': 'This is Third Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'Approval',
          'alertContent': 'This is Fourth Alert -- By Debasis Saha'
      });
      data.push({
          'title': 'To Do Task',
          'alertContent': 'This is Fifth Alert -- By Debasis Saha'
      });
      this._notificationService.generateNotification(data);
  }
}