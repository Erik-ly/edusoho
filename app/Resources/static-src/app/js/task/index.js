import TaskShow from './task';
import { Browser } from 'common/utils';

new TaskShow({
  element: $('body'),
  mode: $('body').find('#js-hidden-data [name="mode"]').val()
});

if (Browser.ie10 || Browser.ie11 || Browser.edge) {
  const iframeDom = document.getElementById('task-content-iframe');
  iframeDom.onload = () => {
    const iframeContent = iframeDom.contentWindow;
    const iframeHtml = iframeContent.document.getElementsByTagName('html')[0];
    iframeHtml.style.width = "100%";
  }
}