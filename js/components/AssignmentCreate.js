export default {
    template: `
        <form @submit.prevent="add">
            <div class="border border-gray-600 text-black">
                <input v-model="newAssignment" placeholder="New Assignment..." class="p-2 rounded-sm">
                <button type="submit" class="bg-white p-2 border-l rounded-sm hover:bg-gray-200">Add</button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add()
        {
            this.$emit("add", this.newAssignment);

            this.newAssignment = '';
        }
    },

}