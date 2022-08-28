import Post from './models/post';

export default function createFakeData() {
    //0, 1, ...39로 이루어진 배열 생성한 후 포스트 데이터로 변환
     const posts = [...Array(40).keys()].map(i => ({
        title: `포스트 #${i}`,
        //https://www.lipsum.com/에서 복사한 200자 이상의 텍스트
        body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue id lacus eget bibendum. Quisque vel enim felis. Aenean id pulvinar nulla, at pharetra risus. Donec vitae est rhoncus, sagittis eros eu, ultrices erat. Ut gravida sed sapien non tristique. Etiam efficitur pellentesque justo et pellentesque. Proin interdum, leo id elementum aliquet, ex nunc imperdiet ex, at luctus arcu augue a mauris. Proin dapibus nunc vel erat maximus, eu lobortis tellus ultricies. Morbi enim lectus, imperdiet id pulvinar sed, bibendum nec quam. Quisque ex mauris, dignissim ac eros id, consequat tristique sem. Maecenas pharetra varius mi, eget vehicula orci sagittis nec. Quisque lacus orci, luctus non tempor eget, lacinia ac enim. Ut mollis sagittis lorem, ut eleifend justo auctor eget. Morbi dignissim, neque a lacinia fermentum, magna libero ultricies elit, eget tincidunt ante nunc accumsan tortor. Nam congue nulla felis, sit amet gravida nisi blandit in.',
        tags: ['가짜','데이터'],
     }));
     Post.insertMany(posts, (err, docs) => {
        console.log(docs);
     });
}