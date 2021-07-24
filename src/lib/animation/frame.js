import { writable } from 'svelte/store';

function createAnimation(){
	const { subscribe, set, update } = writable( 0 );

	let animation;

	return {
		subscribe, 
		animate: ()=>{
			const startAnimation = ()=>{
				animation = requestAnimationFrame( startAnimation );
				update( n => n += 1 );
			};
			startAnimation();
			return ()=>{ cancelAnimationFrame( animation )};	
		},
		setTo: mark =>{
			set( mark );
		},
		stop: reset =>{ 
			cancelAnimationFrame( animation );
			reset ? set( reset ) : null;
		},
	};
};

export const frame = createAnimation();
