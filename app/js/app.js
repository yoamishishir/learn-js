let videoTimelineContainer = document.querySelector('#video-timeline-container'); // parent element
makeElement =()=>
{
    let videoTimelineWrapEL = document.createElement('li');
    videoTimelineWrapEL.className='video-timeline-wrap';
    videoTimelineContainer.appendChild(videoTimelineWrapEL);

    let videoTimelineIconEL = document.createElement('div');
    videoTimelineIconEL.className='video-timeline-icon';
    videoTimelineWrapEL.appendChild(videoTimelineIconEL);

    let timeLineIconEL = document.createElement('i');
    timeLineIconEL.className='bi bi-play';
    videoTimelineIconEL.appendChild(timeLineIconEL);

    let videoTimelineEL = document.createElement('div');
    videoTimelineEL.classList.add('video-timeline');
    videoTimelineWrapEL.appendChild(videoTimelineEL);

    let videoTimelineTitleEL = document.createElement('div');
    videoTimelineTitleEL.className='video-timeline-title';
    videoTimelineWrapEL.appendChild(videoTimelineTitleEL);
}

for(let dataObj in data)
{
    makeElement();
    console.log(dataObj);
    console.log(data[dataObj]);
}