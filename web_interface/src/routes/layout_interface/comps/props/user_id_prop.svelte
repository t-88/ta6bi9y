<TemplateProp title={"User ID"}>
    <div>
        <InputField  label="ID" value={get(prop)} on_change_callback={on_set_user_id} />
    </div>
</TemplateProp>


<script>
    import TemplateProp from "./template_prop.svelte";
    import InputField from "../ui/input_field.svelte";
    import { get } from "svelte/store";

    function on_set_user_id(value) {
        prop.set(value);
    }

    export let prop;
</script>


<style lang="scss">
    div {
        display: flex;
        gap: 10px;
        margin: auto;
        align-items: center;
        justify-content: space-around;
    }
</style>