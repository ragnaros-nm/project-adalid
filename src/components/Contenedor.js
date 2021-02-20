import React from 'react';
import './Contenedor.css';
import imagen from '../assets/orc-white.png';
import styled from '@emotion/styled';

const Imagen= styled.img`
    width: 30px;
    height:30px;
    margin-right: 5px;
    margin-bottom: -5px;
`;

const Contendor = () => {
    return (  
        <div className = "tabinator">
            <h2>Informacion del personaje aqui</h2>
            <input type = "radio" id = "tab1" name = "tabs" checked/>
            <label for = "tab1"><Imagen src={imagen}></Imagen>Resumen</label>
            <input type = "radio" id = "tab2" name = "tabs"/>
            <label for = "tab2">Raider.IO</label>
            <input type = "radio" id = "tab3" name = "tabs"/>
            <label for = "tab3">Hermandad</label>
            <input type = "radio" id = "tab4" name = "tabs"/>
            <label for = "tab4">PvP</label>
            <div id = "content1">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus volutpat viverra velit sed sodales. Sed id lacinia quam. Maecenas felis ante, posuere sed rutrum iaculis, hendrerit a tellus. Ut sed tempus dolor, at convallis turpis. Vestibulum vestibulum molestie accumsan. In eu rhoncus massa. Nam eu aliquam mauris, at posuere orci. Nullam non consequat lectus. Suspendisse sed leo sapien. Phasellus et velit rutrum, blandit ante nec, tempus sapien.
                </p>
            </div>
            <div id = "content2">
                <p>Donec mattis laoreet suscipit. Donec blandit quam sed justo mattis, et hendrerit leo sodales. Donec elit leo, sollicitudin sed purus vitae, iaculis iaculis lacus. Proin quis leo a purus gravida ultricies. Nam molestie a nisi sed scelerisque. Proin in suscipit sem, in viverra libero. Proin quam diam, consequat vitae arcu eget, egestas ultrices eros. Donec sed fermentum lorem. Nam dolor sem, aliquam dapibus rutrum id, tempor ac leo. Vestibulum in neque id eros tristique lacinia. Duis a bibendum dolor, nec cursus eros. Morbi quis enim eu quam gravida lacinia. Etiam tincidunt venenatis felis quis pellentesque. Sed sagittis elit vitae arcu malesuada, quis dapibus libero porttitor.
                </p>
            </div>
            <div id = "content3">
                <p>Integer consequat iaculis porta. Integer semper maximus erat, vel posuere libero fermentum ut. Quisque convallis imperdiet diam, eget mollis risus semper non. Quisque dictum feugiat finibus. Nulla quis lectus augue. Fusce id nulla quis ipsum consequat consectetur in sed felis. Nullam eu urna sollicitudin, sodales risus sit amet, lacinia magna. Mauris placerat metus vitae urna efficitur rutrum. Mauris lobortis ut ex vitae condimentum. Integer venenatis urna ut lectus efficitur pretium. Donec ut ullamcorper urna, nec commodo est. Fusce in nibh sed lectus laoreet fermentum vestibulum a dolor. Donec pulvinar urna sed leo consequat, et vulputate nunc pellentesque. Maecenas ex nisl, pretium sed efficitur vitae, ultricies ut risus.
                </p>
            </div>
            <div id = "content4">
                <p>Duis tempor sapien ac enim laoreet, volutpat tincidunt mi cursus. Integer bibendum pharetra nisl, non mollis dui ullamcorper vel. Curabitur lacinia consectetur velit. In finibus metus velit, quis mollis libero feugiat non. Maecenas est nunc, dapibus non sem eu, ornare consectetur ipsum. Phasellus elit metus, iaculis vitae est et, pharetra ornare lacus. Cras id tristique lorem, posuere molestie leo. Maecenas varius nisi non maximus sollicitudin. Phasellus et tellus tincidunt, porta mauris ut, faucibus augue. Mauris vehicula erat sed magna iaculis, vel fringilla velit sagittis.
                </p>
            </div>
        </div>
    );
}
 
export default Contendor;