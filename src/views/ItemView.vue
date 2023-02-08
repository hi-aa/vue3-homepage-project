<template>
	<div class="contents">
		<h2>Todo</h2>
		<input
			v-model="todoTxt"
			placeholder="insert todo.."
			@keyup.enter="addList"
		/>
		<button @click="addList">Add</button>

		<ul>
			<li v-for="(todo, idx) in todoList" :key="idx" @click="setEditMode(idx)">
				<input
					ref="todoRefs"
					:value="todo"
					:disabled="idx !== editIdx"
					@blur="editExit(idx)"
				/>
				<button @click="deleteList(idx)">Delete</button>
			</li>
		</ul>
	</div>
</template>

<script setup>
import { ref } from 'vue';

const todoTxt = ref('');
const todoList = ref([]);
const editIdx = ref(-1);
const todoRefs = ref([]);

// todo 추가
const addList = () => {
	if (!todoTxt.value) return;

	todoList.value.push(todoTxt.value);
	todoTxt.value = '';
};

// todo 수정
const setEditMode = idx => {
	editIdx.value = idx;
	todoRefs.value[idx].focus(); // TODO: focus가 잘 안먹음
};

// todo 수정 종료
const editExit = idx => {
	console.log('blur>>', idx); // TODO: 수정 종료 시 disabled
};

// todo 삭제
const deleteList = idx => {
	todoList.value.splice(idx, 1);
};
</script>

<style scoped>
.contents {
	padding: 20px;
}
</style>
